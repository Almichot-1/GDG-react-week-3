const UserCard = ({ name, email, age, bgColor = "#f3f4f6" }) => {
  return (
    <div className="p-4 rounded-lg shadow-md text-center" style={{ backgroundColor: bgColor }}>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500">Age: {age}</p>
    </div>
  );
};

export default function App() {
  return (
    <div className="p-6">
      <UserCard name="John Doe" email="john@example.com" age={25} bgColor="#e0f7fa" />
    </div>
  );
}
