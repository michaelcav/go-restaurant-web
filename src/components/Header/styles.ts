import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 30px 30px;
  width: 100%;
  header {
    padding: 0 0 160px;
    display: flex;
    max-width: 1240px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    nav {
      display: flex;
      justify-content: space-between;

      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
