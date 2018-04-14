
export namespace Keynote {
    // Records
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ExportOptions {
      /**
       * compressed image quality, ranging from 0.0 (maximum compression, lowest quality) to 1.0 (lossless compression, highest quality). This option only pertains to JPEG format images.
       */
      compressionFactor: {
        [k: string]: any;
      };
      /**
       * format for resulting images.
       */
      imageFormat: {
        [k: string]: any;
      };
      /**
       * format for exported movie.
       */
      movieFormat: {
        [k: string]: any;
      };
      /**
       * choose whether to include notes, etc.
       */
      exportStyle: {
        [k: string]: any;
      };
      /**
       * print each stage of builds
       */
      allStages: boolean;
      /**
       * include skipped slides
       */
      skippedSlides: boolean;
      /**
       * add borders around slides
       */
      borders: boolean;
      /**
       * include slide numbers
       */
      slideNumbers: boolean;
      /**
       * include date
       */
      date: boolean;
      /**
       * export in raw KPF
       */
      rawKPF: boolean;
      /**
       * password
       */
      password: {
        [k: string]: any;
      };
      /**
       * password hint
       */
      passwordHint: {
        [k: string]: any;
      };
      /**
       * quality of images in PDF document
       */
      PDFImageQuality: {
        [k: string]: any;
      };
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    /**
     * Properties common to all transitions
     */
    export interface TransitionSettings {
      /**
       * Should the transition begin automatically? A value of false indicates to transition on click.
       */
      automaticTransition: boolean;
      /**
       * The number of seconds to wait until beginning the transition.
       */
      transitionDelay: {
        [k: string]: any;
      };
      /**
       * The number of seconds allocated for the transition to occur.
       */
      transitionDuration: {
        [k: string]: any;
      };
      /**
       * The transition effect to apply between the current and following slides.
       */
      transitionEffect: {
        [k: string]: any;
      };
    }

    // Function options
    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ExportOptionalParameter {
      /**
       * the destination file
       */
      to: any;
      /**
       * The format to use.
       */
      as: any;
      /**
       * Optional export settings.
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * The location for the new copy or copies.
       */
      to?: any;
      /**
       * Properties to set in the new copy or copies right away.
       */
      withProperties?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SetOptionalParameter {
      /**
       * The new value.
       */
      to: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeOptionalParameter {
      /**
       * The class of the new object.
       */
      new: any;
      /**
       * The location at which to insert the object.
       */
      at?: any;
      /**
       * The initial contents of the object.
       */
      withData?: any;
      /**
       * The initial values for properties of the object.
       */
      withProperties?: any;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SortOptionalParameter {
      /**
       * The column to sort by.
       */
      by: any;
      direction?: any;
      /**
       * Limit the sort to the specified rows.
       */
      inRows?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface AddChartOptionalParameter {
      rowNames?: any;
      columnNames?: any;
      data?: any;
      type?: any;
      groupBy?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface StartOptionalParameter {
      /**
       * slide at which to start playing
       */
      from?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface MakeImageSlidesOptionalParameter {
      /**
       * a list of image files to add
       */
      files: any;
      setTitles?: boolean;
      master?: any;
    }














}
export interface Keynote {
    // Functions

     /**
      * Export a slideshow to another file
      * @param directParameter The slideshow to export
      * @param option
      * 
      */
     export(directParameter: any, option?: Keynote.ExportOptionalParameter): void;

     /**
      * Copy an object.
      * @param directParameter The object(s) to copy.
      * @param option
      * 
      */
     duplicate(directParameter: any, option?: Keynote.DuplicateOptionalParameter): void;

     /**
      * Sets the value of the specified object(s).
      * @param directParameter undefined
      * @param option
      * 
      */
     set(directParameter: any, option?: Keynote.SetOptionalParameter): void;

     /**
      * Delete an object.
      * @param directParameter undefined
      * 
      */
     delete(directParameter: any, ): void;

     /**
      * Create a new object.

      * @param option
      * @return The new object.
      */
     make(option?: Keynote.MakeOptionalParameter): any;

     /**
      * Clear the contents of a specified range of cells, including formatting and style.
      * @param directParameter undefined
      * 
      */
     clear(directParameter: any, ): void;

     /**
      * Merge a specified range of cells.
      * @param directParameter undefined
      * 
      */
     merge(directParameter: any, ): void;

     /**
      * Sort the rows of the table.
      * @param directParameter undefined
      * @param option
      * 
      */
     sort(directParameter: any, option?: Keynote.SortOptionalParameter): void;

     /**
      * Unmerge all merged cells in a specified range.
      * @param directParameter undefined
      * 
      */
     unmerge(directParameter: any, ): void;

     /**
      * Add a chart to a slide
      * @param directParameter the slide to add the chart to
      * @param option
      * 
      */
     addChart(directParameter: any, option?: Keynote.AddChartOptionalParameter): void;

     /**
      * Start playing the presentation.
      * @param directParameter The presentation to play
      * @param option
      * 
      */
     start(directParameter: any, option?: Keynote.StartOptionalParameter): void;

     /**
      * Make a series of slides from a list of files.
      * @param directParameter the document to add the slides to
      * @param option
      * 
      */
     makeImageSlides(directParameter: any, option?: Keynote.MakeImageSlidesOptionalParameter): void;

     /**
      * Stop the presentation.
      * @param directParameter undefined
      * 
      */
     stop(directParameter: any, ): void;

     /**
      * Advance one build or slide.

      * 
      */
     showNext(): void;

     /**
      * Go to the previous slide.

      * 
      */
     showPrevious(): void;

     /**
      * Show the slide switcher in play mode
      * @param directParameter undefined
      * 
      */
     showSlideSwitcher(directParameter: any, ): void;

     /**
      * Hide the slide switcher in play mode
      * @param directParameter undefined
      * 
      */
     hideSlideSwitcher(directParameter: any, ): void;

     /**
      * Move the slide switcher forward one slide
      * @param directParameter undefined
      * 
      */
     moveSlideSwitcherForward(directParameter: any, ): void;

     /**
      * Move the slide switcher backward one slide
      * @param directParameter undefined
      * 
      */
     moveSlideSwitcherBackward(directParameter: any, ): void;

     /**
      * Hide the slide switcher without changing slides
      * @param directParameter undefined
      * 
      */
     cancelSlideSwitcher(directParameter: any, ): void;

     /**
      * Hide the slide switcher, going to the slide it has selected
      * @param directParameter undefined
      * 
      */
     acceptSlideSwitcher(directParameter: any, ): void;

     /**
      * 

      * 
      */
     startSlideshow(): void;

     /**
      * 
      * @param directParameter the object for the command
      * 
      */
     startFrom(directParameter: any, ): void;

     /**
      * 

      * 
      */
     stopSlideshow(): void;

     /**
      * 
      * @param directParameter the object for the command
      * 
      */
     show(directParameter: any, ): void;
}
