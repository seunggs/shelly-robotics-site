import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Headline from '../components/Headline'
import logo from "../images/logo/logo_shelly_white.svg"

export default function Home() {
  return (
    <Layout fullscreen={true} header={false} footer={false}>
      <div className="bg-spectrum h-screen">
        <Link to="/">
          <div className="p-4">
            <img src={logo} alt="Logo" style={{ width: '128px' }} />
          </div>
        </Link>

        <div className="grid grid-cols-12 items-center h-full">

          {/* hero */}
          <div className="col-span-12 text-center text-white h-full">
            <div className="h-full flex flex-col justify-center" style={{ marginTop: '-100px' }}>
              <Headline size="xl" className="mb-7 font-medium">Shelly Robotics</Headline>

              <div className="opacity-70">
                <p className="text-2xl mb-2">End-to-end AI robotics for warehouse pick and pack</p>
                <p className="text-2xl mb-5">(More details coming soon!)</p>
              </div>
            </div>
          </div>
          {/* end: hero */}

        </div>
      </div>
    </Layout>
  )
}