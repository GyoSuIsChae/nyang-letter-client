import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { format } from 'date-fns';
import styled from 'styled-components';

import Header from '@components/Header';
import { TX } from '@components/Text';
import { MOCK_CAFE_LIST } from '@constants/mockData';
import theme from '@styles/theme';

const CafeListContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 16px;
`;

const CafeListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 7px;
  grid-row-gap: 24px;
  width: 100%;
`;

const CafeItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const ItemImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
`;
const ItemOpenStatus = styled.div<{ openStatus: number }>`
  background-color: ${({ openStatus }) => {
    if (openStatus === 1) {
      return theme.colors.black001;
    }
    if (openStatus === 2) {
      return theme.colors.grey003;
    }
    return theme.colors.white_grey001;
  }};
  border-radius: 12px;
  padding-inline: 14px;
  padding-block: 3px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 50%, 0);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled(TX.SubHead2)`
  color: ${theme.colors.black001};
`;

const InnerText = styled(TX.Body1)<{ openStatus?: number }>`
  color: ${({ openStatus }) => {
    if (openStatus === 1 || openStatus === 2) {
      return 'white';
    }
    if (openStatus === 0) {
      return theme.colors.grey002;
    }
    return theme.colors.grey002;
  }};
`;

const CafeList = () => {
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

  const convertDate = (date: string) => {
    return format(new Date(date), 'yy.MM.dd');
  };

  const renderOpenStatus = (isOpen: boolean, remainingDays: number) => {
    if (isOpen) {
      return (
        <ItemOpenStatus openStatus={1}>
          <InnerText openStatus={1}>OPEN</InnerText>
        </ItemOpenStatus>
      );
    }
    if (remainingDays === 0) {
      return (
        <ItemOpenStatus openStatus={0}>
          <InnerText openStatus={0}>END</InnerText>
        </ItemOpenStatus>
      );
    }
    return (
      <ItemOpenStatus openStatus={2}>
        <InnerText openStatus={2}>D-{remainingDays}</InnerText>
      </ItemOpenStatus>
    );
  };

  const renderCafeList = () => {
    return MOCK_CAFE_LIST.map((cafe) => {
      return (
        <CafeItemWrapper key={cafe.id}>
          <ItemImageWrapper>
            <img
              src={cafe.image}
              alt={cafe.description}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
            {renderOpenStatus(cafe.isOpened, cafe.remainingDays)}
          </ItemImageWrapper>

          <TitleWrapper>
            <TitleText>{cafe.name}</TitleText>
            <InnerText>{`${convertDate(cafe.startAt)} - ${convertDate(
              cafe.endAt,
            )}`}</InnerText>
          </TitleWrapper>
        </CafeItemWrapper>
      );
    });
  };

  return (
    <CafeListContainer>
      <Header title="카페 리스트" />

      <InfiniteScroll
        dataLength={MOCK_CAFE_LIST.length} // This is important field to render the next data
        next={fetchMoreData}
        hasMore
        loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        <CafeListWrapper>{renderCafeList()}</CafeListWrapper>
      </InfiniteScroll>
    </CafeListContainer>
  );
};

export default CafeList;
