import React from "react";
import LayoutWrapper from "../../component/styledComponents/layoutWrapper";
import Header from "../../component/styledComponents/header";

class Layout extends React.PureComponent {
  render() {
    const {
      children
    } = this.props;
    return (
      <LayoutWrapper>
        <Header/>
        {children}
      </LayoutWrapper>
    );
  }
}

export default Layout;
