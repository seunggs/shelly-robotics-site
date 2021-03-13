import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Headline from '../components/Headline'
import Content from '../components/Content'
import { StaticImage } from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll'

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
        <p className="text-sm italic text-gray-500 mt-3">{caption}</p>
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
      <div className={`border-${borderStyle} border-l-${borderWidth} border-${borderColor} ${size === 'sm' ? 'pl-3' : 'pl-6'} ${className}`}>
        {heading && <div className={`${size === 'sm' ? 'text-md' : 'text-xl'} text-${headingColor} ${size === 'sm' ? 'mb-1' : 'mb-2'}`}>{heading}</div>}
        {text && <div className={`${size === 'sm' ? 'text-lg' : 'text-2xl'} text-${textColor}`}>{text}</div>}
        {subtext && <div className="text-sm text-gray-500 mt-4">{subtext}</div>}
      </div>
    )
  }

  return (
    <div>
      <Layout fullscreen={true} footer={false}>

        {/* What we do */}
        <div className="mx-4 md:mx-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 md:mt-24 mb-12 p-8 md:p-12">
              <div className="md:col-span-12">
                <Headline>What We Do</Headline>
                <div className="text-2xl text-gray-500">🤖&nbsp;&nbsp;End-to-end AI robotics for warehouse pick & pack (to begin with)</div>
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
                      heading="Our approach"
                      text="Generalize to many tasks before specializing"
                      subtext={<div>
                        <p className="mb-3">One of the biggest problems in AI robotics is lab2real transfer. As soon as the robot is operating in an unstructured, unpredictable real world, it fails.</p>
                        <p className="mb-3">Our model trains for generalization before specialization which makes it much more robust to vagaries of the real world.</p>
                        <a className="cursor-pointer underline hover:text-gray-800 transition-all duration-150" onClick={() => scrollTo('#generalization')}>Learn more &rarr;</a>
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
                      heading="Our approach"
                      text="Cheap & rich data (scalable)"
                      subtext={<div>
                        <p className="mb-3">Robotics requires a lot of data to work well in the real world, but robot data is typically very expensive (i.e. expert demonstration) or not rich enough (i.e. scripted or random).</p>
                        <p className="mb-3">Our model uses human "play" data in VR, which is rich, but doesn't require expert demonstration or labelling. This makes it easy to collect large-scale data at a fraction of the cost and allows for much better scaling.</p>
                        <p className="mb-3">We think this scalability is key to future AI systems. The greatest success in practical AI in the past few years (i.e. AlphaStar, GPT-3) has been due to large scaling of data and compute.</p>
                        <a className="cursor-pointer underline hover:text-gray-800 transition-all duration-150" onClick={() => scrollTo('#cheap-data')}>Learn more &rarr;</a>
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
                      heading="Our approach"
                      text="VR teleoperation to handle edge cases"
                      subtext={<div>
                        <p className="mb-2">Production deployment typically requires very low error rate.</p>
                        <p className="mb-2">We aim to get to market with ~85-90% accuracy and handle all remaining edge cases through human teleoperation (and add them to our training data at the same time!).</p>
                        <p className="mb-3">We're aiming to make the VR teleoperation as intuitive as consumer devices like iPhone and Oculus Quest.</p>
                        <a className="cursor-pointer underline hover:text-gray-800 transition-all duration-150" onClick={() => scrollTo('#teleoperation')}>Learn more &rarr;</a>
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
        <div className="bg-blue-50 mx-4 md:mx-12">
          <div className="container mx-auto text-gray-500">
            <div className="grid grid-cols-1 md:grid-cols-12 mt-12 mb-12 p-8 md:p-12">

              <div className="md:col-span-4 md:pr-16">
                <Headline color="text-blue-800">Demo</Headline>
                <p className="italic mb-6">*** This demo is not real (yet) - we're still building out a working demo with a real robot</p>
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
                        className="pr-8 mb-4"
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
                        className="pr-8 mb-4"
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
                        className="pr-8 mb-4"
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

                  <div id="play-example" className="mt-12">
                    <Headline size="md">Example data collection</Headline>
                    <div className="mb-6">
                      <div>Show video and states</div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Headline size="md">Research results</Headline>
                    <ul className="list-disc list-outside pl-5 mb-6">
                      <li className="mb-2">The original paper our core model is based on shows ~70% ± 10% success rate over 3 seeded experiments on 18 zero-shot tasks based on <u>just 3 hours of play data</u>.</li>
                      <li className="mb-2">We have multiple improvements on our pipeline for testing, but believe that simple scaling of model and dataset will get us very close to the target accuracy of 85-90%.</li>
                      <li className="mb-2">We plan to test both accuracy and robustness to varying intial conditions by <u>expanding the variety of environments</u> and collecting a <u>considerably larger dataset (~5-10x) via crowdsourcing</u>.</li>
                    </ul>
                  </div>

                  <div className="mt-12">
                    <Headline size="md">Milestones</Headline>
                    <div className="mb-6">
                      <form>
                        <div className="mb-2"><input type="checkbox" checked={true} className="mr-2" /><span className="line-through">Build model v1 (PyTorch Lightning)</span></div>
                        <div className="mb-2"><input type="checkbox" className="mr-2" /><span>Test model with a real robot in 1 environment and test baseline accuracy/robustness</span></div>
                        <div className="mb-2"><input type="checkbox" className="mr-2" /><span>Add natural language commands</span></div>
                        <div className="mb-2"><input type="checkbox" className="mr-2" /><span>Expand to 5 environments and 5x data/env and test improvement in accuracy/robustness</span></div>
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
                <Headline color="text-purple-800">Generalize to many tasks before specializing</Headline>
              </div>

              <div className="md:col-span-8 md:pr-16">

                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-1">
                    <div className="text-5xl font-semibold text-purple-500 mb-5">1.</div>
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
                      subtext={<div className="text-base">
                        <p className="mb-3">Robots now only replace a fraction of a person because they can only do a very specific task - for example, Kiva bots that move shelves around.</p>
                        <p>With a more general capability, our robot aims to replace a picker entirely. Since a robot can take all 3 full-time shifts in a day, it can replace 3 people.</p>
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
                      subtext={<div className="text-base">
                        <p className="mb-3">Training specifically for a very narrow task is one of the main causes of failure in the real world.</p>
                        <p className="mb-3">Even a seemingly simple task like picking seems to require a wide range of skills that we humans take for granted.</p>
                        <p>It might seem counterintuitive to train on multiple tasks unrelated to the specific task we want to accomplish, but the latest research suggests this approach makes robots far more robust to the vagaries of the real world.</p>
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
                <Headline color="text-pink-800">Cheap & rich data<br />(scalable)</Headline>
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
                      text={<span>Play data is cheap (<a className="cursor-pointer underline hover:text-pink-800 transition-all duration-150" onClick={() => scrollTo('#play-example')}>here's an example</a>)</span>}
                      subtext={<div className="text-base">
                        <p className="mb-3">Expert demonstration needs to be carefully set up, executed, and requires a "reset", which are very time consuming.</p>
                        <p className="mb-3">It is also not robust - for example, a task of opening a drawer will fail if the demonstration was done by holding the top of the handle, but the task requires holding the bottom of the handle.</p>
                        <p className="mb-3">With "play" data, on the other hand, a human demonstrator simply interacts with the environment, using his/her own common sense and curiosity. This requires no setup, supervision, or reset and is very cheap to collect.</p>
                        <p>Play data is also a lot more robust as boredom will force human demonstrators to try varied actions for the same task.</p>
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
                      subtext={<div className="text-base">
                        <p className="mb-3">Scripted/random data is cheap to produce.</p>
                        <p className="mb-3">But they're not rich enough to be useful. Imagine a robot randomly trying things - there's very little chance it'll grab a block and place it on top of another block by chance.</p>
                        <p>Play data uses human's common sense and innate curiosity, creating a much richer data. In essence, it allows us to bipass the difficult problem of rich exploration.</p>
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
                <Headline color="text-red-800">VR teleoperation</Headline>
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
                      subtext={<div className="text-base">
                        <p className="mb-3">Clients require a very low error rate for deployment in a production environment.</p>
                        <p>By using VR teleoperation, we can have a nearly 100% reliable system with much lower model accuracy. Humans can handle the difficult edge cases.</p>
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
                      subtext={<div className="text-base">
                        <p className="mb-3">Teleoperation is still pretty painful.</p>
                        <p className="mb-3">Using VR and a robot with a smooth head movement, we aim to create a consumer-level UX for teleoperation - like iPhone or Oculus Quest.</p>
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
                      subtext={<div className="text-base">
                        <p className="mb-3">Right now, subpar teleoperation UX makes it difficult to collect quality data.</p>
                        <p className="mb-3">With far more optimized teleoperatione experience, we can not only collect high quality data in training, but also failure edge cases in production environment.</p>
                        <p>This should make our models much more robust in the future as we accumulate more and more real world data.</p>
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
                <Headline color="text-gray-800">Next steps</Headline>
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
                        <p className="mb-3">We're waiting on the delivery of the Reachy robot. As soon as we get it, we'll be generating play data and testing our model.</p>
                        <p>Once we get a baseline accuracy/robustness, we'll expand the number of environments and dataset size to test our "generalization before specialization" hypothesis.</p>
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
                      text="VR teleoperation UX improvement"
                      subtext={<div className="text-lg">
                        <p className="mb-3">We'll also start our work on improving the teleoperation UX, possibly with hardware responsiveness improvements as well as UX/software tweaks.</p>
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