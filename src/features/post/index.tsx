"use client";

import { clean } from "@/lib/sanitizeHtml";
import styles from "@/styles/Post.module.css";
import { formatDate } from "@/ultil/date";
import Link from "next/link";
import { SamePosts } from "./Sames";
import { useEffect } from "react";

export const Post = ({ post }: { post: any }) => {
  const catIds = post?.categories || [];
  const catId = catIds[0];
  useEffect(() => {
    const insertToggleButton = () => {
      const tocContainer = document.getElementById("toc_container");

      if (tocContainer) {
        if (!tocContainer.querySelector(".toc-toggle-container")) {
          const toggleContainer = document.createElement("div");
          toggleContainer.className = "toc-toggle-container";
          toggleContainer.style.display = "flex";
          toggleContainer.style.justifyContent = "space-between";
          toggleContainer.style.marginBottom = "10px";

          const textElement = document.createElement("div");
          textElement.textContent = "Mục lục";

          const toggleButton = document.createElement("button");
          toggleButton.className = "toc-toggle-btn";
          toggleButton.style.marginLeft = "10px";

          const svgIcon = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
      `;

          toggleButton.innerHTML = svgIcon;

          toggleContainer.appendChild(textElement);
          toggleContainer.appendChild(toggleButton);

          tocContainer.insertBefore(toggleContainer, tocContainer.firstChild);

          const tocList = tocContainer.querySelector(".toc_list");
          if (tocList) {
            tocList.classList.add("show");
          }

          toggleButton.addEventListener("click", () => {
            if (tocList) {
              tocList.classList.toggle("show");
            }
          });
        }
      }
    };

    insertToggleButton();
  }, [post]);
  return (
    <article className={styles["post"]}>
      <main>
        {post && (
          <>
            <div className={styles["post__main"]}>
              <div className={styles["post__heading"]}>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: clean(post?.title?.rendered)
                  }}
                />
                <span>{formatDate(post?.date)}</span>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: clean(post?.content?.rendered)
                }}
              />
            </div>

            <SamePosts catId={catId} id={post?.id} />
          </>
        )}

        {!post && (
          <div className={styles["not-found"]}>
            <p>Bài viết này không tồn tại!</p>
            <Link className={styles["back-new"]} href={"/tin-tuc"}>
              Trở về trang tin tức
            </Link>
          </div>
        )}
      </main>
    </article>
  );
};
