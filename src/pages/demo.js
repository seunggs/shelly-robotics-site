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

        {/* What we do */}
        <div className="mx-4 md:mx-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-16 mb-12 p-8 md:p-12">
              <div className="md:col-span-12">
                <Headline>What We Do</Headline>
                <div className="text-2xl text-gray-500">🤖&nbsp;&nbsp;End-to-end AI robotics for warehouse pick & pack (to begin with!)</div>
              </div>
            </div>
          </div>
        </div>
        {/* end: What we do */}

        {/* Thesis */}
        <div className="bg-gray-50 mx-4 md:mx-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mb-12 p-8 md:p-12">
              <div className="md:col-span-12">
                <Headline>Our Thesis</Headline>

                <div className="grid grid-cols-1 md:grid-cols-12 mt-16">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-blue-500 mb-5">1.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Prevailing wisdom"
                      text="Hyper-specialize to a single task"
                      className="mb-8 md:mb-0"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="blue-300"
                      headingColor="blue-500"
                      textColor="blue-700"
                      heading="Our approach 👍"
                      text="Generalize to many tasks before specializing"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Lab2real transfer problem: as soon as the robot is operating in an unstructured real world, it fails</li>
                          <li className="mb-3">Our model trains for generalization before specialization which makes it much more robust to the vagaries of the real world</li>
                          <li className="mb-3">Because of more general capability, 1 robot can now replace ~3 people instead of a fraction of a person</li>
                        </ul>
                        <div className="mt-5">
                          <a className="cursor-pointer underline hover:text-gray-800 transition-all duration-150" onClick={() => scrollTo('#generalization')}>Learn more &rarr;</a>
                        </div>
                      </div>}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 mt-16">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-indigo-500 mb-5">2.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Prevailing wisdom"
                      text="Robot data is expensive (not scalable)"
                      className="mb-8 md:mb-0"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderWidth={2}
                      borderColor="indigo-300"
                      headingColor="indigo-500"
                      textColor="indigo-700"
                      heading="Our approach 👍"
                      text="Cheap & rich data (scalable)"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Robotics requires a lot of data - but robot data is expensive</li>
                          <li className="mb-3">We use human "play" data, which is cheap because it doesn't require expert demonstration or labelling</li>
                          <li className="mb-3">This makes our model scale much better - and large scaling is key to a production-level system</li>
                        </ul>
                        <div className="mt-5">
                          <a className="cursor-pointer underline hover:text-gray-800 transition-all duration-150" onClick={() => scrollTo('#cheap-data')}>Learn more &rarr;</a>
                        </div>
                        <SmImageWrapper to="#play-data-example" playButton={true} className="mt-8">
                          <StaticImage src="../images/demo-1.jpg" alt="VR demonstration with a robot" style={{ display: 'block' }} />
                        </SmImageWrapper>
                      </div>}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 mt-16">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-pink-500 mb-5">3.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Prevailing wisdom"
                      text="Need 99.9%+ accuracy prior to production deployment"
                      className="mb-8 md:mb-0"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderWidth={2}
                      borderColor="pink-300"
                      headingColor="pink-500"
                      textColor="pink-700"
                      heading="Our approach 👍"
                      text="VR teleoperation to handle edge cases"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Production deployment requires very low error rate</li>
                          <li className="mb-3">This requirement dramatically slows time to market</li>
                          <li className="mb-3">Get to market quickly with ~85-90% accuracy + teleoperation to handle difficult edge cases</li>
                        </ul>
                        <div className="mt-5">
                          <a className="cursor-pointer underline hover:text-gray-800 transition-all duration-150" onClick={() => scrollTo('#teleoperation')}>Learn more &rarr;</a>
                        </div>
                        <SmImageWrapper to="#demo" className="mt-8">
                          <StaticImage src="../images/demo-1.jpg" alt="VR demonstration with a robot" style={{ display: 'block' }} />
                        </SmImageWrapper>
                      </div>}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* end: Thesis */}

        {/* Demo */}
        <div id="demo" className="bg-blue-50 mx-4 md:mx-12">
          <div className="container mx-auto text-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mb-12 p-8 md:p-12">

              <div className="md:col-span-4 md:pr-16">
                <Headline color="blue-800">Demo</Headline>
                <p className="italic mb-5">***This demo is not real (yet) - we're still building out a working demo with a real robot***</p>
                <p className="text-2xl text-gray-700 mb-6">“With the improvements in our pipeline, we believe that scaling our model and dataset will get us very close to the target accuracy of 85-95% without fundamental algorithmic innovations”</p>
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

                  <div id="play-data-example" className="mt-12">
                    <Headline size="md">Example data collection</Headline>
                    <div className="mb-6">
                      <div>Show video and states</div>
                    </div>
                  </div>

                  <div id="research-results" className="mt-12">
                    <Headline size="md">Research results</Headline>
                    <ul className="list-disc list-outside pl-5 mb-6">
                      <li className="mb-2">The original paper our core model is based on shows ~70% ± 10% success rate over 3 seeded experiments on 18 zero-shot tasks based on <u>just 3 hours of play data</u></li>
                      <li className="mb-2">Crucially, the model shows high robustness to variations in initial conditions - suggesting better lab2real transfer</li>
                      <li className="mb-2">With the improvements in our pipeline, we believe that scaling our model and dataset will get us very close to the target accuracy of 85-95% <span className="italic">without</span> fundamental algorithmic innovations</li>
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

        {/* Thesis 1 */}
        <div id="generalization" className="bg-purple-50 mx-4 md:mx-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mb-12 p-8 md:p-12">

              <div className="md:col-span-4 md:pr-16">
                <Headline color="purple-800">Generalize to many tasks before specializing</Headline>
                <p className="text-2xl text-gray-700 mt-5 mb-6">“With a more generalized capability, our robot will replace ~3 workers”</p>
              </div>

              <div className="md:col-span-8 md:pr-16">

                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-purple-500 mb-5">1.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Currently..."
                      text="Robots only work in the lab"
                      className="mb-8 md:mb-0 md:mr-8"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="purple-300"
                      headingColor="purple-500"
                      textColor="purple-700"
                      heading="Our approach"
                      text="Robots that work in the real world"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Robots don't work in the real world because it's trained on a highly structured lab environment</li>
                          <li className="mb-3">Even a seemingly simple task like picking requires a wide range of skills that we humans take for granted</li>
                          <li className="mb-3">It might seem counterintuitive to train on multiple tasks unrelated to the specific task we want to accomplish, but the latest research suggests this approach makes robots far more robust to the vagaries of the real world</li>
                        </ul>
                      </div>}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 mt-12">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-purple-500 mb-5">2.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Currently..."
                      text="1 robot replaces a fraction of a person"
                      className="mb-8 md:mb-0 md:mr-8"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="purple-300"
                      headingColor="purple-500"
                      textColor="purple-700"
                      heading="Our approach"
                      text="1 robot replaces ~3 people"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Robots can only replace a fraction of a person at the moment because they can only do a very specific task - for example, Kiva bots that move shelves around</li>
                          <li className="mb-3">With a more generalized capability, our robot will replace a picker entirely</li>
                          <li className="mb-3">Since a robot can take all 3 full-time shifts in a day, it can replace 3 people</li>
                        </ul>
                      </div>}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* end: Thesis 1 */}

        {/* Thesis 2 */}
        <div id="cheap-data" className="bg-pink-50 mx-4 md:mx-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mb-12 p-8 md:p-12">

              <div className="md:col-span-4 md:pr-16">
                <Headline color="pink-800">Cheap & rich data<br />(scalable)</Headline>
                <p className="text-2xl text-gray-700 mt-5 mb-6">“Play data is rich and cheap to collect - it allows for much better scalability”</p>
              </div>

              <div className="md:col-span-8 md:pr-16">

                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-pink-500 mb-5">1.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Currently..."
                      text="Expert demonstration is expensive"
                      className="mb-8 md:mb-0 md:mr-8"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="pink-300"
                      headingColor="pink-500"
                      textColor="pink-700"
                      heading="Our approach"
                      text={<span>Play data is cheap (<a className="cursor-pointer underline hover:text-pink-800 transition-all duration-150" onClick={() => scrollTo('#play-data-example')}>here's an example</a>)</span>}
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Expert demonstration needs to be carefully set up, executed, and "reset", which are very time consuming</li>
                          <li className="mb-3">With "play" data, on the other hand, a human demonstrator simply interacts with the environment, using his/her own common sense and curiosity. This requires no setup, supervision, or reset and is very cheap to collect</li>
                        </ul>
                      </div>}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 mt-12">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-pink-500 mb-5">2.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Currently..."
                      text="Scripted/random data is not rich enough"
                      className="mb-8 md:mb-0 md:mr-8"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="pink-300"
                      headingColor="pink-500"
                      textColor="pink-700"
                      heading="Our approach"
                      text="Play data is rich"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Scripted/random data is cheap but not rich enough to be useful; imagine a robot randomly flailing about - there's very little chance it'll do anything really useful for humans</li>
                          <li className="mb-3">Play data uses human's common sense and innate curiosity, creating a much richer data</li>
                          <li className="mb-3">It allows us to bipass the difficult problem of exploration</li>
                        </ul>
                      </div>}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* end: Thesis 2 */}

        {/* Thesis 3 */}
        <div id="teleoperation" className="bg-red-50 mx-4 md:mx-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mb-12 p-8 md:p-12">

              <div className="md:col-span-4 md:pr-16">
                <Headline color="red-800">VR teleoperation</Headline>
                <p className="text-2xl text-gray-700 mt-5 mb-6">“By using VR teleoperation, we can have a nearly 100% reliable system with much lower model accuracy - humans can handle the difficult edge cases”</p>
              </div>

              <div className="md:col-span-8 md:pr-16">

                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-red-500 mb-5">1.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Currently..."
                      text="Slow to market: >99.9% accuracy required for production deployment"
                      className="mb-8 md:mb-0 md:mr-8"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="red-300"
                      headingColor="red-500"
                      textColor="red-700"
                      heading="Our approach"
                      text="Fast to market: >85% accuracy + teleoperation"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Clients require a very low error rate for deployment to production</li>
                          <li className="mb-3">By using VR teleoperation, we can have a nearly 100% reliable system with much lower model accuracy - humans can handle the difficult edge cases</li>
                        </ul>
                      </div>}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 mt-12">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-red-500 mb-5">2.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Currently..."
                      text="Teleoperation is painful"
                      className="mb-8 md:mb-0 md:mr-8"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="red-300"
                      headingColor="red-500"
                      textColor="red-700"
                      heading="Our approach"
                      text="Insanely great teleoperation experience via VR"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Teleoperation is still pretty painful</li>
                          <li className="mb-3">Using VR and a responsive robot with a smooth head movement, we aim to create a consumer-level UX for teleoperation - like iPhone or Oculus Quest</li>
                        </ul>
                      </div>}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 mt-12">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-red-500 mb-5">3.</div>
                  </div>
                  <div className="md:col-span-5">
                    <TextBlock
                      heading="Currently..."
                      text="Teleoperation data quality is poor"
                      className="mb-8 md:mb-0 md:mr-8"
                    />
                  </div>
                  <div className="md:col-span-6">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="red-300"
                      headingColor="red-500"
                      textColor="red-700"
                      heading="Our approach"
                      text="High quality, real world data collection via teleoperation"
                      subtext={<div>
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">Right now, subpar teleoperation UX makes it difficult to collect quality data</li>
                          <li className="mb-3">With more optimized teleoperation experience, we can not only collect high quality data in training, but also failure edge cases in production</li>
                          <li className="mb-3">This should make our models much more robust as we accumulate more and more real world data</li>
                        </ul>
                      </div>}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* end: Thesis 3 */}

        {/* Next steps */}
        <div id="teleoperation" className="bg-gray-50 mx-4 md:mx-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mb-12 p-8 md:p-12">

              <div className="md:col-span-4 md:pr-16">
                <Headline color="gray-800">Next steps <span className="ml-2">☕</span></Headline>
              </div>

              <div className="md:col-span-8 md:pr-16">

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="md:col-span-1">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="indigo-300"
                      headingColor="indigo-500"
                      textColor="indigo-700"
                      heading="Model"
                      text="Real robot testing and model scaling"
                      subtext={<div className="text-lg">
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">We're waiting on the delivery of the Reachy robot</li>
                          <li className="mb-3">As soon as we get it, we'll be generating play data and testing our model</li>
                          <li className="mb-3">Once we get a baseline accuracy/robustness, we'll expand environments and dataset size to get to production level performance</li>
                        </ul>
                      </div>}
                      className="pr-8"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <TextBlock
                      borderStyle="solid"
                      borderColor="indigo-300"
                      headingColor="indigo-500"
                      textColor="indigo-700"
                      heading="Teleoperation"
                      text="VR teleoperation UX improvements"
                      subtext={<div className="text-lg">
                        <ul className="list-disc list-outside pl-5">
                          <li className="mb-3">We'll also start our work on improving the teleoperation UX</li>
                          <li className="mb-3">Increase responsiveness via software/networking optimizations</li>
                          <li className="mb-3">Improve robot morphology to more closely match a human for better experience</li>
                          <li className="mb-3">Add tactile sensors and feedback</li>
                        </ul>
                      </div>}
                      className="pr-8"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        {/* end: Thesis 3 */}

      </Layout>
    </div >
  )
}