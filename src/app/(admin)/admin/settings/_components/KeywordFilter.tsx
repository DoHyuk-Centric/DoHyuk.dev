"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import IconButton from "@/components/iconButton";
import styles from "./KeywordFilter.module.css";

export default function KeywordFilter({
  initialKeywords,
}: {
  initialKeywords: string[];
}) {
  const [keywords, setKeywords] = useState(initialKeywords);
  const [value, setValue] = useState("");

  const addKeyword = () => {
    const trimmed = value.trim();
    if (!trimmed || keywords.includes(trimmed)) {
      setValue("");
      return;
    }
    setKeywords([...keywords, trimmed]);
    setValue("");
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  return (
    <div className={styles.filter}>
      <p className={styles.description}>
        등록된 키워드가 댓글 또는 방명록에 포함되면 <strong>스팸</strong>으로 표시됩니다.
      </p>
      <div className={styles.inputRow}>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              addKeyword();
            }
          }}
          placeholder="차단할 키워드 입력 후 Enter"
        />
        <IconButton
          icon={Plus}
          alt="키워드 추가"
          buttonSize={44}
          iconSize={20}
          onClick={addKeyword}
        />
      </div>
      {keywords.length > 0 && (
        <ul className={styles.tagList}>
          {keywords.map((keyword) => (
            <li key={keyword} className={styles.tag}>
              {keyword}
              <button
                type="button"
                className={styles.removeButton}
                onClick={() => removeKeyword(keyword)}
                aria-label={`${keyword} 삭제`}
              >
                <X size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
