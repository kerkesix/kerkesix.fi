// Parses blog posts from old Jekyll format to this implementation's format. Quick and dirty.
package main

import (
	"bufio"
	"fmt"
	"os"
	"path"
	"path/filepath"
	"strings"
)

func main() {
	if len(os.Args) != 3 {
		panic("Give source folder as first arg, target folder as second")
	}
	srcFolder := os.Args[1]
	outFolder := os.Args[2]
	if _, err := os.Stat(outFolder); os.IsNotExist(err) {
		_ = os.MkdirAll(outFolder, 0700)
	}

	err := filepath.Walk(srcFolder, func(fpath string, info os.FileInfo, err error) error {
		if info.IsDir() || err != nil {
			return err
		}

		spl := strings.Split(info.Name(), "-")
		date := strings.Join(spl[0:3], "-")
		newName := strings.Join(spl[3:], "-")

		fmt.Println("Parsing", date, newName)

		file, err := os.Open(fpath)
		if err != nil {
			return err
		}

		scanner := bufio.NewScanner(file)
		scanner.Split(bufio.ScanLines)

		frontmatter := []string{}
		imgs := []string{}
		content := []string{}
		frontParsed := false
		insideGallery := false
		i := -1
		for scanner.Scan() {
			i++
			s := scanner.Text()

			if !frontParsed {
				// We are in front matter. Skip first line, we only collect the content of it here
				if i == 0 {
					continue
				}

				if strings.HasPrefix(s, "--") {
					frontParsed = true
					continue
				}

				// Skipped content
				ignore := false
				for _, skip := range []string{"layout:", "categories:", "toc:", "comments:", "image:"} {
					if strings.HasPrefix(s, skip) {
						ignore = true
						break
					}
				}
				if ignore {
					continue
				}

				// Convert cover image format to new (the "image:" tag is already discarded above)
				if strings.HasPrefix(strings.TrimSpace(s), "feature:") {
					imgPath := strings.TrimSpace(strings.TrimPrefix(strings.TrimSpace(s), "feature:"))
					frontmatter = append(frontmatter, fmt.Sprintf("coverImage: \"/assets/blog/%s\"", imgPath))
					continue
				}

				frontmatter = append(frontmatter, s)

				// Add our date after the title
				if strings.HasPrefix(s, "title:") {
					frontmatter = append(frontmatter, fmt.Sprintf("date: \"%s\"", date))
					continue
				}
			} else {
				// We are at content. Strip image galleries out
				if insideGallery {
					if strings.HasPrefix(s, "</div>") {
						insideGallery = false
						continue
					}

					s = strings.TrimSpace(s)
					if len(s) == 0 {
						continue
					}

					// Parse thumbnail and image paths. Format is like:
					// - [![](/images/kalliokiipeilytreenia-29.6.2012/Thumbnails/CIMG1146.JPG)](/images/kalliokiipeilytreenia-29.6.2012/CIMG1146.JPG)
					s = strings.ReplaceAll(s, "/images/", "/assets/blog/")
					s = strings.TrimPrefix(strings.TrimLeft(s, "- "), "[![](")
					s = strings.TrimRight(s, ")")
					ss := strings.Split(s, ")](")
					imgs = append(imgs, fmt.Sprintf("- thb: \"%s\"", ss[0]))
					imgs = append(imgs, fmt.Sprintf("  img: \"%s\"", ss[1]))
				} else {
					if strings.HasPrefix(s, "<div class=\"th-grid image-gallery\" markdown=\"1\">") {
						insideGallery = true
						continue
					}

					// Normal content
					content = append(content, s)
				}
			}
		}

		if len(imgs) > 0 {
			frontmatter = append(frontmatter, "gallery:")
			for _, img := range imgs {
				frontmatter = append(frontmatter, "  "+img)
			}
		}
		f, err := os.Create(path.Join(outFolder, newName))
		if err != nil {
			return err
		}

		_, _ = f.WriteString("---\n")
		_, _ = f.WriteString(strings.Join(frontmatter, "\n"))
		_, _ = f.WriteString("\n---\n")
		_, _ = f.WriteString(strings.Join(content, "\n"))
		f.Close()
		return nil
	})
	if err != nil {
		panic(err)
	}
}
