import React from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export default ({ children }: Props): React.ReactElement => (
  <div>
    <h1>David Dugger</h1>
    {children}
    <footer>
      © {new Date().getFullYear()} David Dugger. All rights reserved
    </footer>
  </div>
);
