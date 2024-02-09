import { sayHello } from "@/lib/action";

const serverAction = () => {
    return (
        <div>
            <form action={sayHello}>
                <button>Click</button>
            </form>
        </div>
    );
}

export default serverAction;
