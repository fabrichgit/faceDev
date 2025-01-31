export default function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { text: string; }): void; new(): any; }; }; }) {
    res.status(200).json({text: "pong"});
}