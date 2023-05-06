import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';

const {Title} =Typography;


const Homepage = () => {
  const {data,isFetching}= useGetCryptosQuery()
  const globalStats = data?.data?.stats

  console.log(data)
  return (
    <>
    <Title level={2} className='heading'>
      Global Crypto Stats
    </Title>
    <Row>
      <Col span={12}><Statistic title="Total Currencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets " value={millify(globalStats.totalMarkets)}/></Col>

    </Row>
    </>
  )
}

export default Homepage