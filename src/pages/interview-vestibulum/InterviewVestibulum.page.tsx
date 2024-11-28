import { Link, useParams } from "react-router-dom";
import {
  PiMicrophoneFill,
  PiSpeakerHighFill,
  PiPlayFill,
  PiEarSlash,
} from "react-icons/pi";
import FormSelect from "@/components/form/FormSelect";
import VolumeVisualizer from "@/components/audio-visualizers/VolumeVisualizer";
import { twMerge } from "tailwind-merge";
import TestSpeakerTones from "./TestSpeakerTones";
import useAudioMediaServices from "@/components/audio-media-services/useAudioMediaServices";

const MicrophoneSection = ({
  selectedMic,
  setSelectedMic,
  availableMics,
  isMicPlayback,
  setisMicPlayback,
  mediaStreamData
}) => {
  return (
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <label className="block text-sm  font-medium mb-2 pl-9">
        Dispositivo de Entrada
      </label>
      <div className="relative flex items-center">
        <div className="text-2xl appearance-none inline-block rounded leading-tight w-10 focus:outline-none focus:border-gray-500">
          <PiMicrophoneFill />
        </div>
        <FormSelect
          value={selectedMic}
          onChange={(v) => setSelectedMic(v as string)}
          options={availableMics}
        />
      </div>

      <div className="pl-9 py-3 flex items-center">
        <button
          onClick={() => setisMicPlayback(!isMicPlayback)}
          className={twMerge(
            "mr-4 py-2 px-6",
            "inline-flex text-lg",
            isMicPlayback
              ? "text-white bg-indigo-600 hover:bg-indigo-700"
              : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100",
            "border border-indigo-700",
            "focus:outline-none rounded"
          )}
        >
          <PiEarSlash />
        </button>
        <p>Escutar o dispositivo</p>
      </div>

      <div className="pl-9 mt-3 mb-1 flex items-center">
        <VolumeVisualizer
          className="h-6 w-full"
          analyserNode={mediaStreamData.analyserNode}
        />
      </div>
    </div>
  );
};

const SpeakerSection = ({
  selectedSpk,
  setSelectedSpk,
  availableSpkrs,
  mediaStreamData
}) => {
  return (
    <div className="w-full md:w-1/2 mb-4 md:mb-0">
      <label className="block text-sm  font-medium mb-2 pl-9">
        Dispositivo de Saída
      </label>
      <div className="relative flex items-center">
        <div className="text-2xl appearance-none inline-block rounded leading-tight w-10 focus:outline-none focus:border-gray-500">
          <PiSpeakerHighFill />
        </div>
        <FormSelect
          value={selectedSpk}
          onChange={(v) => setSelectedSpk(v as string)}
          options={availableSpkrs}
        />
      </div>

      <div className="pl-9 py-3 flex items-center">
        <TestSpeakerTones
          audioContext={mediaStreamData.audioCtx}
        />
      </div>
    </div>
  );
};

export default function InterviewVestibulumPage() {
  const { interviewId } = useParams();
  const {
    permMicrophone,
    mediaStreamData,
    isMicPlayback,
    setisMicPlayback,
    availableMics,
    selectedMic,
    setSelectedMic,
    availableSpkrs,
    selectedSpk,
    setSelectedSpk,
  } = useAudioMediaServices();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="mb-8 title-font text-3xl font-medium max-w-2xl xl:max-w-none mx-auto">
        Preparação para a Entrevista
      </h1>

      <section className="pb-24 flex xl:flex-row flex-col">
        <div>
          <div className="md:flex md:justify-between gap-8">
            <MicrophoneSection
              selectedMic={selectedMic}
              setSelectedMic={setSelectedMic}
              availableMics={availableMics}
              isMicPlayback={isMicPlayback}
              setisMicPlayback={setisMicPlayback}
              mediaStreamData={mediaStreamData}
            />
            <SpeakerSection
              selectedSpk={selectedSpk}
              setSelectedSpk={setSelectedSpk}
              availableSpkrs={availableSpkrs}
              mediaStreamData={mediaStreamData}
            />
          </div>

          <div className="mt-8 pl-9">
            {!permMicrophone.isPermitted && (
              <div className={permMicrophone.canBePermitted ? "py-4 px-6 border border-blue-500 bg-blue-100 rounded-lg my-2" : "py-4 px-6 border border-red-500 text-gray-600 bg-red-50 rounded-lg my-2"}>
                <p>{permMicrophone.canBePermitted ? "Por razões de segurança, seu navegador não concedeu o acesso ao microfone para esta página." : "Microfone Indisponível"}</p>
                {permMicrophone.canBePermitted ? (
                  <button
                    className="mr-4 inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-sm mt-6"
                    onClick={() => mediaStreamData.getMediaStreamSource()}
                  >
                    Conceder Acesso
                  </button>
                ) : (
                  <div>
                    <p className="text-sm">Parece que você não tem acesso ao microfone :C</p>
                    <p className="text-sm">Verifique as configurações do seu dispositivo e do seu navegador - para prosseguir é necessário o acesso ao microfone.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-8 pl-9">
            <p className="font-medium">Instruções:</p>
            <p>
              - Ler a pergunta<br />
              - Gravar a resposta<br />
              - Encerrar a gravação<br />
              - Ouvir a própria gravação<br />
              - Excluir gravação para re-gravar<br />
              - Salvar a resposta<br />
              - Ir para a próxima pergunta<br />
              - Finalizar a entrevista<br />
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              to={`/interview/${interviewId}`}
              className="inline-flex items-center text-white bg-indigo-500 py-3 px-6 rounded hover:bg-indigo-600"
            >
              Iniciar Entrevista
              <PiPlayFill className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
