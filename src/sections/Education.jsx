import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

// const data = {
//   education: [
//     {
//       title: "Feb 2021 - Mar 2024",
//       cardTitle:
//         "BSc (Hons) in Information Technology Specialising in Software Engineering",
//       cardSubtitle: "Sri Lanka Institute of Information Technology - Malabe",
//       cardDetailedText: "2nd Upper Class",
//       icon: {
//         src: "images/education/sliit-logo.png",
//       },
//     },
//     {
//       title: "2006 - 2020",
//       cardTitle: "GCE Advanced Level - 2020",
//       cardSubtitle: "Dharmaraja College - Kandy",
//       cardDetailedText: "Maths Stream with ICT",
//       icon: {
//         src: "assets/education/drck-logo.png",
//       },
//     },
//   ],
// };

function Education() {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={1}> Education</Title>
    </div>
  );
}

export default Education;
