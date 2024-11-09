import Image from "next/image";
import { Student } from "./interfaces/student";

const students: Student[] = [
  {
    id: 1,
    name: 'Ali Khan',
    rollNo: '101',
    className: '10-A',
    imageUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 2,
    name: 'Fatima Noor',
    rollNo: '102',
    className: '10-B',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    id: 3,
    name: 'Ahmed Raza',
    rollNo: '103',
    className: '9-C',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];

export default function Home() {
  return (
    <div className="container">
      <h1 className="title">Student ID Cards</h1>
      <div className="grid">
        {students.map((student) => (
          <div key={student.id} className="card">
            <Image
              src={student.imageUrl || '/images/placeholder.jpg'}
              alt={`${student.name}'s photo`}
              width={100}
              height={100}
              className="image rounded-2xl ml-8"
            /> 
            <h3 className="name mt-10 font-bold ">{student.name}</h3>
            <p>Roll No: {student.rollNo}</p>
            <p>Class: {student.className}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
