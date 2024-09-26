import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/Accordion"
  
  export default function FAQSection() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-purple-600 mb-4 text-center">
          Frequently asked questions(FAQ)
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          This FAQ provides information on frequent questions or concerns about the iGram . world downloader . if you can{"'"}t
          find the answer to your question, feel free to ask through email on our contact page.
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is an Instagram Video Downloader?</AccordionTrigger>
            <AccordionContent>
              An Instagram Video Downloader is a tool that allows users to save videos from Instagram to their device.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Which file formats are supported by iGram for downloading purposes?</AccordionTrigger>
            <AccordionContent>
              iGram typically supports common video formats such as MP4. However, the exact formats may vary.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Which devices are compatible with iGram Downloader?</AccordionTrigger>
            <AccordionContent>
              iGram Downloader is usually compatible with most devices that have a web browser, including smartphones, tablets, and computers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is there a limit on the number of videos that can be downloaded using iGram?</AccordionTrigger>
            <AccordionContent>
              The download limit may vary depending on the specific terms of service of iGram. It{"'"}s best to check their official website for the most up-to-date information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is it possible to download content other than video on this website?</AccordionTrigger>
            <AccordionContent>
              While iGram is primarily designed for video downloads, some Instagram downloaders also support downloading photos. Check the specific features of iGram for more details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }