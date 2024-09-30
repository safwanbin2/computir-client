import { useState } from "react";

const DragAndDrop = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "John",
      photo:
        "https://img.freepik.com/free-photo/bearded-man-with-striped-shirt_273609-7180.jpg",
    },
    {
      id: 2,
      name: "Lily",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68xCJyjzwUC0J89fXPOkmIvW09vTZjHRkVg&s",
    },
    {
      id: 3,
      name: "Bill",
      photo:
        "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Ded",
      photo:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      id: 5,
      name: "alib",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s",
    },
  ]);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();

    console.log({ index, draggingIndex });

    if (index !== draggingIndex) {
      const updatedPersons = [...persons];
      const draggedItem = updatedPersons[draggingIndex];
      updatedPersons.splice(draggingIndex, 1);
      updatedPersons.splice(index, 0, draggedItem);

      setDraggingIndex(index);
      setPersons(updatedPersons);
    }
  };

  const handleDrop = () => {
    setDraggingIndex(null); // Reset the dragging state
  };

  return (
    <div className="text-white min-h-screen w-full flex justify-center items-center">
      <div className="w-11/12 h-full space-y-10">
        <h2>Drag and drop perosns</h2>
        <div className="grid grid-cols-2 gap-10 cursor-pointer">
          {persons.map((person, index) => (
            <div
              className="grid grid-cols-2 bg-gray-900 rounded-2xl justify-center items-center"
              key={person.id}
              person={person}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={handleDrop}
            >
              <p className="text-3xl font-semibold tracking-widest ms-10">
                {person.name}
              </p>
              <img className="w-full" src={person.photo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
