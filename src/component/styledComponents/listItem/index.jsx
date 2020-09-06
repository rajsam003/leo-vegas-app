import { styled } from "../../../theme";
import GameCaption from "../gameCaption";

const ListItem = styled.li`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);

  &:hover ${GameCaption} {
    opacity: 1;
    -webkit-transition-property: opacity;
    transition-property: opacity;
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-delay: .2s;
    transition-delay: .2s;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 200%;
    width: 200%;
    background: #fff;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    -webkit-transform: translateX(-128%) translateY(25%) rotate(45deg);
    transform: translateX(-128%) translateY(25%) rotate(45deg);
    opacity: .1;
  }

  &:hover:after {
    -webkit-transform: translateX(-20%) translateY(-25%) rotate(45deg);
    transform: translateX(-20%) translateY(-25%) rotate(45deg);
}
`;

export default ListItem;
