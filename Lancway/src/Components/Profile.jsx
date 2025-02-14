
const ProfileCard = ({ person }) => {
  return (
    <div className="max-w-xs bg-white text-black rounded-2xl shadow-lg p-4 relative">
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h3 className="mt-4 text-lg font-bold">{person.name}</h3>
      <p className="text-gray-600 text-sm mt-1">{person.degree}</p>
      <p className="text-gray-600 text-sm mt-1">Experience: {person.experience} years</p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600">
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;

// Usage Example
// <ProfileCard person={{
//   image: "your-image-url.jpg",
//   name: "John Doe",
//   degree: "PhD in Computer Science",
//   experience: "10"
// }} />
