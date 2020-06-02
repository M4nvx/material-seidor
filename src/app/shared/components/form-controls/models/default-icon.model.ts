/**
 * Defines select|input autocomplete default icon
 *
 * @export
 * @interface DefaultIcon
 */
export interface DefaultIcon {
  /**
   * Fontawesome icon class. If icon is defined, label won't be shown
   * @see fontawesome-icons {@link https://fontawesome.com/icons}
   *
   * @type {string}
   * @memberof InputExtra
   */
  icon: string;

  /**
   * CSS color
   *
   * @type {string}
   * @memberof InputExtra
   */
  color?: string;
}
