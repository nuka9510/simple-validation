import { Enum } from "@nuka9510/simple-enum";
export default class Phase extends Enum<number> {
    #private;
    /** `result`초기화 단계 */
    static get INIT(): Phase;
    /** `required`확인 단계 */
    static get REQUIRED(): Phase;
    /** `pattern` 또는 `date` 확인 단계 */
    static get MATCH(): Phase;
    /** `length` 확인 단계 */
    static get LENGTH(): Phase;
    /** 완료 단계 */
    static get DONE(): Phase;
    get name(): string;
    constructor(value: number, name: string);
}
