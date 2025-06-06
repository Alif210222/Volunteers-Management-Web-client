// MemberContext.js
import { createContext, useState } from 'react';

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [needMember, setNeedMember] = useState(null); // initial value can be null


  
  return (
    <MemberContext.Provider value={{ needMember, setNeedMember }}>
      {children}
    </MemberContext.Provider>
  );
};
