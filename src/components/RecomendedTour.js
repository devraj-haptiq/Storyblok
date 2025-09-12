import Link from "next/link";

export const RecomendedTour = (props) => {
  // console.log(props);

  return (
    <div>
      <Link href={`/${props.story.full_slug}`}>
        <h3>{props.story.content.name}</h3>
      </Link>
    </div>
  );
};
