import ListPostItem from "./ListPostItem";
import styles from "./ListView.module.css";

const mockupData = [
  { id: 1, createdAt: "2026-08-28", title: "단순함이라는 지독한 훈련과 시각적 침묵", views: 2310 },
  { id: 2, createdAt: "2026-08-21", title: "우리가 잃어버린 사소한 일상의 질서들에 대하여", views: 1894 },
  { id: 3, createdAt: "2026-08-14", title: "새해의 첫날, 무계획의 즐거움과 작은 결심", views: 1520 },
  { id: 4, createdAt: "2026-08-07", title: "기술의 시대에 종이책을 펼쳐 든다는 것", views: 1450 },
  { id: 5, createdAt: "2026-07-31", title: "어떤 오해와 사소한 이해에 관하여", views: 1204 },
  { id: 6, createdAt: "2026-07-24", title: "여름밤의 미풍과 식어가는 커피 잔의 온도", views: 1118 },
  { id: 7, createdAt: "2026-07-17", title: "가을의 중앙에서 읽었던 무용한 문장들", views: 982 },
  { id: 8, createdAt: "2026-07-10", title: "침묵을 견디는 일에 서툰 사람들을 위한 에세이", views: 830 },
  { id: 9, createdAt: "2026-07-03", title: "어둠 속에서 반짝이는 어떤 집의 창문 하나", views: 712 },
  { id: 10, createdAt: "2026-06-26", title: "아침 산책길에서 만난 겨울새와 메마른 나뭇가지", views: 654 },
  { id: 11, createdAt: "2026-06-19", title: "느리게 걷는 사람만이 볼 수 있는 골목의 표정", views: 588 },
  { id: 12, createdAt: "2026-06-12", title: "빈 노트를 앞에 두고 아무것도 쓰지 못한 밤", views: 521 },
  { id: 13, createdAt: "2026-06-05", title: "오래된 서점에서 발견한 낯선 이름의 흔적", views: 476 },
  { id: 14, createdAt: "2026-05-29", title: "매일 같은 길을 걸으며 다르게 보는 법", views: 439 },
  { id: 15, createdAt: "2026-05-22", title: "혼자 먹는 저녁과 그 안의 작은 평온", views: 401 },
  { id: 16, createdAt: "2026-05-15", title: "버리지 못한 물건들이 말해주는 것들", views: 367 },
  { id: 17, createdAt: "2026-05-08", title: "비 오는 날의 카페와 낯선 사람의 대화", views: 320 },
  { id: 18, createdAt: "2026-05-01", title: "계절이 바뀌는 걸 가장 먼저 알아채는 방법", views: 288 },
  { id: 19, createdAt: "2026-04-24", title: "낮잠에서 깬 오후, 세상이 낯설게 느껴질 때", views: 245 },
  { id: 20, createdAt: "2026-04-17", title: "처음 이 블로그를 시작하며 남기는 짧은 인사", views: 198 },
];

export default function ListView() {
  const data = mockupData;
  return (
    <div className={styles.list}>
      {data.map((post) => (
        <ListPostItem
          key={post.id}
          createdAt={post.createdAt}
          title={post.title}
          views={post.views}
        />
      ))}
    </div>
  );
}
