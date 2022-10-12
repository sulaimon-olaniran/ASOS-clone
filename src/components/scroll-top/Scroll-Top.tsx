import {Fragment, useEffect} from "react";
import {useLocation} from "react-router-dom";
//import {} from "react-router-dom"

interface componentProps {
  children: React.ReactNode;
}

const ScrollToTop = ({children}: componentProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <Fragment>{children}</Fragment>;
};

export default ScrollToTop;
