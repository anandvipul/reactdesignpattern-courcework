import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
  text-align: center;
  color: ${(props) => props.color};
`;

export const SplitScreen = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
  color,
}) => {
  const [left, right] = children;

  return (
    <Container>
      <Pane weight={leftWeight} color={color}>
        {/* <Left /> */}
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {/* <Right /> */}
        {right}
      </Pane>
    </Container>
  );
};
