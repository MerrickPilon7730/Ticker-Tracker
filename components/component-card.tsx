import { ArrowRightCircleIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type Props = {
  title: string;
  bg?: string;
  content?: React.ReactNode;
  more?: React.ReactNode;
  moreContent?: React.ReactNode;
};

export const ComponentCard = ({
  title,
  bg,
  content,
  more,
  moreContent,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card
        className={`${
          bg ? bg : "bg-gradient-to-b from-emerald-500 to-slate-600"
        } border-none`}
      >
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">{title}</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          {content}
        </CardContent>
        {more ? (
          more
        ) : (
          <div className="flex justify-end">
            <div
              className={`cursor-pointer flex justify-end gap-2 mr-6 ${ bg ? "hover:text-red-500" : "hover:text-emerald-500"}`}
              onClick={() => setShowModal(true)}
            >
              <p>More</p>
              <ArrowRightCircleIcon />
            </div>
          </div>
        )}
      </Card>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-[10%]"
          onClick={() => setShowModal(false)} 
        >
          <div
            className="w-[70%] max-w-screen"
            onClick={(e) => e.stopPropagation()} 
          >
            <Card className="bg-gradient-to-b from-emerald-500 to-slate-600 p-4 border-none">
              <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-3xl pb-2">{title}</CardTitle>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-red-500 font-bold text-lg"
                >
                  &times;
                </button>
              </CardHeader>
              <CardContent className="space-y-2 max-h-[70vh] overflow-y-auto">
                {moreContent}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};
