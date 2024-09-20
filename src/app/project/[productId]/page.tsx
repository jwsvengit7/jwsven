// Correct export
export default function ProjectDescription({ params, }: ProjectDescriptionProps) {
  return (
    <div>
      <h1>Project Description</h1>
      <p>Project ID: {params.productId}</p>
    </div>
  );
}

interface ProjectDescriptionProps {
  params: {productId:string};
}
