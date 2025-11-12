import { Enum } from "@nuka9510/simple-enum";

export default class Phase extends Enum<number> {
  static #INIT = new Phase(1, 'INIT');

  static #REQUIRED = new Phase(2, 'REQUIRED');

  static #MATCH = new Phase(3, 'MATCH');

  static #LENGTH = new Phase(4, 'LENGTH');

  static #DONE = new Phase(5, 'DONE');

  /** `result`초기화 단계 */
  static get INIT() { return Phase.#INIT; }

  /** `required`확인 단계 */
  static get REQUIRED() { return Phase.#REQUIRED; }

  /** `pattern` 또는 `date` 확인 단계 */
  static get MATCH() { return Phase.#MATCH; }

  /** `length` 확인 단계 */
  static get LENGTH() { return Phase.#LENGTH; }

  /** 완료 단계 */
  static get DONE() { return Phase.#DONE; }

  #name: string;

  get name() { return this.#name; }

  constructor(
    value: number,
    name: string
  ) {
    super(value);

    this.#name = name;
  }

}