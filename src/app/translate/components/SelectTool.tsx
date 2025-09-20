export default function SelectTool({ isPending }: { isPending: boolean }) {
    return (
        <select
            disabled={isPending}
            defaultValue="DeepL"
            className="select"
        >
            <option value={"DeepL"}>DeepL</option>
            <option disabled={true}>Chatgpt</option>
            <option disabled={true}>Gemini</option>
            <option disabled={true}>Google Translate</option>
        </select>
    );
}
