export interface LevelModel {
    id: number;
    name: string;
    writtenPart: {'name': string, 'duration': number};
    oralPart: {'name': string, 'duration': number};

}