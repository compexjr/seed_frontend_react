import { Header } from "@/components/header/header";
import { Option } from "@/components/home/option";
import { Textinfo } from "@/components/home/text-info";
import { Title } from "@/components/home/title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { FileImage, FileText, LucideLockKeyhole, UserCircle2, } from "lucide-react"

export function Home() {
    return (
        <div className="mb-7">
            <div className="flex">
                <h1 className="text-xl xl:text-2xl font-medium flex items-center gap-2 border-b border-muted pl-5">
                    <Link to="/">MyAppFront</Link>
                </h1>
                <Header />
            </div>
            <div className="px-5">
                <div className="flex flex-col my-6 gap-3">
                    <h1 className="text-2xl font-bold">Bem-Vindo(a)</h1>
                    <p>Gerencie e organize as suas tarefas com praticidade e eficiência.</p>
                </div>
                <div className="w-full grid md:grid-cols-2 content-center gap-3">
                    <Option>
                        <FileText className="mb-5 text-orange-500" />
                        <Title>Gerenciador de Tarefas</Title>
                        <Textinfo>Crie, edite e acompanhe suas tarefas.</Textinfo>
                        <Link to="/painel">
                            <Button>Acessar</Button>
                        </Link>
                    </Option>
                    <Option>
                        <FileImage className="mb-5 text-blue-500" />
                        <Title>Gerenciador de Imagens</Title>
                        <Textinfo>Organize e visualize suas imagens facilmente.</Textinfo>
                        <Link to="/imagens">
                            <Button>Acessar</Button>
                        </Link>
                    </Option>
                    <Option>
                        <UserCircle2 className="mb-5 text-green-500" />
                        <Title>Perfil do Usuário</Title>
                        <Textinfo>Visualize e edite suas informações pessoais.</Textinfo>
                        <Link to="/perfil">
                            <Button>Acessar</Button>
                        </Link>
                    </Option>
                    <Option>
                        <LucideLockKeyhole className="mb-5 text-violet-500" />
                        <Title>Alterar senha</Title>
                        <Textinfo>Modifique sua senha para manter sua conta segura.</Textinfo>
                        <Link to="/configuracoes">
                            <Button>Acessar</Button>
                        </Link>
                    </Option>
                </div>
            </div>
        </div>
    )
}