const subtitle = "アウトプットしていく!!!サイト";

function EachPost(props: { title: string }) {
  return (
    <article>
      <a href="post.html">
        <h3>{props.title}</h3>
      </a>
    </article>
  );
}

export default function Hero() {
  return (
  <>
    <hr />
    <h1 className="hero" style={{color: 'red' }}>Home</h1>
    <p>{subtitle}</p>
    <section>
      <EachPost title="スケジュール管理と猫の理論"/>
      <EachPost title="音楽が呼び起こす" />
    </section>
    <hr />
  </>
  );
}