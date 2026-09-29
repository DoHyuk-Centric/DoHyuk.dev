import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

// MDX가 마크다운 `![]()`을 컴파일하면 날것의 <img>가 나오는데, basePath를
// 거치지 않아 GitHub Pages 서브패스 배포에서 경로가 깨진다. img를 이 컴포넌트로
// 매핑해 다른 이미지들과 동일하게 withBasePath를 적용한다.
function MdxImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null;

  return <Image src={withBasePath(src)} alt={alt ?? ""} width={0} height={0} sizes="720px" />;
}

export const mdxComponents = {
  img: MdxImage,
};
