export interface Media {
    id: number;
    name: string;
    preview: string;
    data: MediaType;
}
interface MediaType {
    480: string;
    max: string;
}
