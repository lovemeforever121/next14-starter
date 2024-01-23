import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Error: Page Not Found</h2>
      <p>Page your are look for does not exist.</p>
      <Link href="/">Click here to go back to home page</Link>
    </div>
  );
};

export default NotFound;
