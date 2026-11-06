import { useEffect } from "react";

const SUFFIX = "Pavan Kumar Nagendla Photography";

/** Sets the browser tab title (and description) for each page. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${SUFFIX}` : `${SUFFIX} | Wildlife, Street & Portraits`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);
}
