import React, { useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase'; // ✅ adjust relative path as needed

function Homepage() {
  useEffect(() => {
    async function fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Homepage</h2>
    </div>
  );
}

export default Homepage;
