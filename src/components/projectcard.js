const ProjectCard = ({ title, description, imageUrl }) => {

  
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;