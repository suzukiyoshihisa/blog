import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";

export default function About() {
  return (
    <Container>
      <Hero title = "About" subtitle = "This is an about page." imageOn = {true}/>

      <PostBody>
        <p>WEB・システム開発・多言語翻訳・グラフィックなど各事業体を連携する事で、単体の事業体では成し得ない、ローコスト・ハイクオリティのソリューションを提供いたします。弊社では、それぞれの事業体が法人化した高いレベルで事業運営しており、各分野に特化したノウハウやネットワーク網を持ち合わせております。そのノウハウを集結・連携させ、ワンストップでのサービス提供をすることで、品質やコスト等、様々な面で最適なソリューションを提供できます。
  制作だけでなくサイト保守・更新・運用サービスのアウトソーシング先として、企業のコストを削減し、成果を出すサイト運用も得意としています。</p>
        <h2>技術力、センスのクリエイティブチームが成功をサポートする4つの強み</h2>
        <p>国内のみならず海外にもリーチできる多言語サイト、パンフレットやチラシを制作。</p>
        <p>翻訳・ライティング・デザインまで一括マネジメントが可能です。</p>

        <h3>国内外のクリエイティブがワンストップ</h3>
        <p>国内のみならず海外にもリーチできる多言語サイト、パンフレットやチラシを制作。</p>
        <p>翻訳・ライティング・デザインまで一括マネジメントが可能です。</p>
      </PostBody>
    </Container>
  );
}