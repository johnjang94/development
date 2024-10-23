import { RxDividerHorizontal } from "react-icons/rx";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Archives() {
  return (
    <div>
      <div className="flex space-x-3 items-center mt-16 justify-center">
        <RxDividerHorizontal className="text-3xl" />
        <h2 className="text-2xl font-bold text-center">Archives</h2>
        <RxDividerHorizontal className="text-3xl" />
      </div>
      <ul>
        <div className="flex justify-between items-center border-b-2">
          <li>Mini YouTube Clone</li>
          <div className="flex space-x-3 items-center">
            <a href="https://youtube-myversion.netlify.app/">
              <FaExternalLinkAlt />
            </a>
            <a href="https://github.com/johnjang94/cloneYouTube">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center border-b-2">
          <li>To Do List web application</li>
          <div className="flex space-x-3 items-center">
            <a href="https://student-todo.netlify.app/">
              <FaExternalLinkAlt />
            </a>
            <a href="https://github.com/johnjang94/todo_fe">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <li>Mini E-commerce - Shoppy</li>
          <div className="flex space-x-3 items-center">
            <a href="https://new-shoppy.netlify.app/">
              <FaExternalLinkAlt />
            </a>
            <a href="https://github.com/johnjang94/shoppy">
              <FaGithub />
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
}
