import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Headline from '../components/Headline'
import Content from '../components/Content'
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll'
import { ImPlay2 } from '@react-icons/all-files/im/ImPlay2'

export default function Demo() {
  const ImageWrapper = ({
    borderStyle = 'solid',
    borderWidth = 2,
    borderColor = 'gray-300',
    caption = '',
    children,
  }) => {
    return (
      <div className={`border-${borderStyle} border-l-${borderWidth} border-${borderColor} pl-4`}>
        <div>{children}</div>
        {caption && <p className="text-sm italic text-gray-500 mt-3">{caption}</p>}
      </div>
    )
  }

  const SmImageWrapper = ({
    to = '#',
    playButton = false,
    width = '160px',
    caption = '',
    className = '',
    children,
  }) => {
    return (
      <div className={`rounded-md max-w-full overflow-hidden cursor-pointer hover:opacity-75 transition-all duration-300 ${className}`} style={{ width }} onClick={() => scrollTo(to)}>
        <div className="relative">
          {playButton && <div className="absolute z-10 top-0 right-0 bottom-0 left-0 flex flex-row justify-center items-center"><ImPlay2 style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.7)' }} /></div>}
        <div>{children}</div>
        </div>
        {caption && <p className="text-sm italic text-gray-500 mt-3">{caption}</p>}
      </div>
    )
  }

  const TextBlock = ({
    size = 'md', // 'sm' or 'md'
    borderStyle = 'dashed',
    borderWidth = 2,
    borderColor = 'gray-300',
    headingColor = 'gray-400',
    textColor = 'gray-700',
    heading,
    text,
    subtext,
    className = '',
  }) => {
    return (
      <div className={`border-${borderStyle} border-l-${borderWidth} border-${borderColor} ${size === 'sm' ? 'pl-3' : 'pl-6'} pr-8 ${className}`}>
        {heading && <div className={`${size === 'sm' ? 'text-md' : 'text-xl'} text-${headingColor} ${size === 'sm' ? 'mb-1' : 'mb-2'}`}>{heading}</div>}
        {text && <div className={`${size === 'sm' ? 'text-lg' : 'text-2xl'} text-${textColor}`}>{text}</div>}
        {subtext && <div className="text-gray-500 mt-4">{subtext}</div>}
      </div>
    )
  }

  return (
    <div>
      <Layout fullscreen={true} footer={false}>

        {/* Demo */}
        <div id="demo" className="bg-blue-50 mx-4 md:mx-12">
          <div className="container mx-auto lg:max-w-7xl text-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mb-12 p-8 md:p-12">

              <div className="md:col-span-4 md:pr-16">
                <Headline color="blue-800">Demo (WIP)</Headline>
                <p className="italic mb-5">***We're still building a demo with a real robot***</p>
                <p className="text-2xl text-gray-700 mb-6">“With the improvements in our pipeline, we believe that scaling our model and dataset will get us very close to the target accuracy of 85-95% <span className="italic">without fundamental algorithmic innovations</span>”</p>
              </div>
              <div className="md:col-span-8">
                <div className="mb-12">
                  <Headline size="md">End-to-end AI robotics using VR demonstration data</Headline>
                  <div className="mb-6">
                    <div>We're using the open source robot Reachy from Pollen Robotics to collect our data via VR teleoperation.</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 mt-8 mb-10">
                    <div className="md:col-span-1">
                      <TextBlock
                        size="sm"
                        borderStyle="solid"
                        borderColor="blue-300"
                        headingColor="blue-500"
                        textColor="blue-700"
                        heading="Model"
                        text="Task-agnostic unsupervised architecture"
                        className="mb-4"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <TextBlock
                        size="sm"
                        borderStyle="solid"
                        borderColor="blue-300"
                        headingColor="blue-500"
                        textColor="blue-700"
                        heading="Training"
                        text="End-to-end learning from raw pixels"
                        className="mb-4"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <TextBlock
                        size="sm"
                        borderStyle="solid"
                        borderColor="blue-300"
                        headingColor="blue-500"
                        textColor="blue-700"
                        heading="Data"
                        text="Cheap, unlabelled, non-expert VR demonstration data"
                        className="mb-4"
                      />
                    </div>
                  </div>

                  <ImageWrapper
                    borderColor="blue-500"
                    caption={<div>
                      *VR demonstration image from <a className="underline" href="https://www.pollen-robotics.com/" target="_blank">Pollen Robotics</a> (open source hardware we're using for data collection)
                    </div>}
                  >
                    <StaticImage src="../images/demo-1.jpg" alt="VR demonstration with a robot" style={{ display: 'block' }} />
                  </ImageWrapper>

                  {/* <div id="play-data-example" className="mt-12">
                    <Headline size="md">Example data collection</Headline>
                    <div className="mb-6">
                      <div>Show video and states</div>
                    </div>
                  </div> */}

                  <div id="research-results" className="mt-12">
                    <Headline size="md">Research results</Headline>
                    <ul className="list-disc list-outside pl-5 mb-6">
                      <li className="mb-2">The original paper our core model is based on shows ~70% ± 10% success rate over 3 seeded experiments on 18 zero-shot tasks based on <u>just 3 hours of video data</u></li>
                      <li className="mb-2">Crucially, the model shows high robustness to variations in initial conditions - suggesting better lab2real transfer</li>
                      <li className="mb-2">With the improvements in our pipeline, we believe that scaling our model and dataset will get us very close to the target accuracy of 85-95% <span className="italic">without fundamental algorithmic innovations</span></li>
                      <li className="mb-2">We plan to test both accuracy and robustness to varying intial conditions by <u>expanding the variety of environments</u> and collecting a <u>considerably larger dataset (~10-20x/env) via crowdsourcing</u></li>
                    </ul>
                  </div>

                  <div className="mt-12">
                    <Headline size="md">Milestones</Headline>
                    <div className="mb-6">
                      <form>
                        <div className="mb-2"><input type="checkbox" checked={true} className="mr-2" /><span className="line-through">Build model v1 (PyTorch Lightning)</span></div>
                        <div className="mb-2"><input type="checkbox" className="mr-2" /><span>Test model with a real robot in 1 environment and test baseline accuracy/robustness</span></div>
                        <div className="mb-2"><input type="checkbox" className="mr-2" /><span>Add natural language commands</span></div>
                        <div className="mb-2"><input type="checkbox" className="mr-2" /><span>Expand to 3-5 environments and 10-20x data/env and test improvement in accuracy/robustness</span></div>
                      </form>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
        {/* end: Demo */}

      </Layout>
    </div >
  )
}