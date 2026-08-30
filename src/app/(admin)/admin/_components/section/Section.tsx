import Title from "./Title";
import ContentLists from "./ContentLists";
import styles from "./Section.module.css"

export default function Section<T>({
  title,
  link,
  items,
  count,
  renderItem,
  getHref,
}: {
  title: string;
  link: string;
  items: T[];
  count: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  getHref: (item: T, index: number) => string;
}) {
  return (
    <section className={styles.container}>
      <Title title={title} link={link} />
      <ContentLists
        items={items}
        count={count}
        renderItem={renderItem}
        getHref={getHref}
      />
    </section>
  );
}
