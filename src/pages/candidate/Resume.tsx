import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Resume = () => {
  const [generatedResume, setGeneratedResume] = useState<null>();

  const generateResume = async () => {
    try {
      const response = await axios.get(
        "https://ai-resume-generator.p.rapidapi.com/Documents/GenerateResume",
        {
          params: {
            university: "Michigan State University",
            degree: "Information Systems",
            skills: "Networking, Web Development",
          },
          headers: {
            "X-RapidAPI-Key":
              "31ad4d710bmsh386467647829c47p113ab0jsnaca6afce2499",
            "X-RapidAPI-Host": "ai-resume-generator.p.rapidapi.com",
          },
        }
      );
      setGeneratedResume(response.data);
    } catch (error) {
      console.error("Error generating resume:", error);
    }
  };

  const importResume = () => {
    // Implement resume import logic here
    console.log("Importing resume...");
  };

  const exportResume = () => {
    if (generatedResume) {
      const blob = new Blob([generatedResume], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "generated_resume.pdf";
      link.click();
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 space-x-4">
        <Button onClick={generateResume}>Generate Resume</Button>
        <Button onClick={importResume}>Import Resume</Button>
        <Button onClick={exportResume} disabled={!generatedResume}>
          Export Resume
        </Button>
      </div>

      <div className="relative">
        <Sheet>
          <SheetContent side="left" className="top-16 p-0 sm:max-w-xl">
            {/* <LeftSidebar /> */}
          </SheetContent>
        </Sheet>

        {generatedResume ? (
          <div className="border p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Generated Resume</h2>
            <pre>{generatedResume}</pre>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            No resume generated yet. Click "Generate Resume" to create one.
          </div>
        )}

        <Sheet>
          <SheetContent side="right" className="top-16 p-0 sm:max-w-xl">
            {/* <RightSidebar /> */}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Resume;
