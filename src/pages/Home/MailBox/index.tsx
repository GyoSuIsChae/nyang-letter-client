import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';

import Header from '@components/Header';
import { TX } from '@components/Text';
import { MOCK_MAIL_LIST } from '@constants/mockData';

const MailBoxContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 16px;
`;
const MailListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 22px;
  grid-row-gap: 32px;
  width: 100%;
`;

const MailItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const TitleText = styled(TX.SubHead2)`
  color: ${({ theme }) => theme.colors.black001};
`;

const MailBox = () => {
  const [hasMore, setHasMore] = useState<boolean>(false);
  const fetchMoreData = () => {
    setTimeout(() => {
      console.log('fetchMoreData');
    }, 1200);
  };
  const refresh = () => {
    setTimeout(() => {
      console.log('refresh');
    }, 1200);
  };

  const renderMailList = () => {
    return MOCK_MAIL_LIST.map((mailItem) => {
      return (
        <MailItemWrapper
          key={mailItem.id}
          role="button"
          tabIndex={0}
          onClick={() => {
            console.log('click');
          }}
        >
          <img
            src={mailItem.image}
            alt={mailItem.description}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <TitleText>{mailItem.title}</TitleText>
        </MailItemWrapper>
      );
    });
  };

  return (
    <MailBoxContainer>
      <Header title="편지 보관함" />
      <InfiniteScroll
        dataLength={MOCK_MAIL_LIST.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: 'center' }}>더 가져오는 중...</h4>}
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; 당겨서 새로고침</h3>
        }
      >
        <MailListWrapper>{renderMailList()}</MailListWrapper>
      </InfiniteScroll>
    </MailBoxContainer>
  );
};

export default MailBox;
