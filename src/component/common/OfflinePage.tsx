import styled from "styled-components";

function OfflinePage() {
  const OfflinePageContainer = styled.div`
    text-align: center;
  `;

  const OfflinePageTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
  `;

  const OfflinePageMessage = styled.p`
    font-size: 16px;
  `;

  return (
    <OfflinePageContainer>
      <OfflinePageTitle>Offline Page</OfflinePageTitle>
      <OfflinePageMessage>
        Sorry, it seems that you are offline. Please check your internet
        connection.
      </OfflinePageMessage>
    </OfflinePageContainer>
  );
}

export default OfflinePage;
