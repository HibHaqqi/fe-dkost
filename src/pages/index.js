import Introduction from "../components/introduction";
import Cover from "../components/cover";
import Sidebar from "@/components/sidebar";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image path or URL
  },
  {
    title: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl:
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image path or URL
  },
  {
    title: "Project 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl:
      "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image path or URL
  },
];

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7">home page</div>
    </div>
  );
};

export default Home;
