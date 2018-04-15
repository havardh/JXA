
export namespace Messages {
    // Records

    // Function options

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CloseOptionalParameter {
      /**
       * Whether or not changes should be saved before closing.
       */
      saving?: any;
      /**
       * The file in which to save the document.
       */
      savingIn?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SaveOptionalParameter {
      /**
       * The file in which to save the document.
       */
      in?: any;
      /**
       * The type of file to save.
       */
      as?: string;
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

    export interface QuitOptionalParameter {
      /**
       * Whether or not changed documents should be saved before closing.
       */
      saving?: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface CountOptionalParameter {
      /**
       * The class of objects to be counted.
       */
      each?: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface DuplicateOptionalParameter {
      /**
       * The location for the new object(s).
       */
      to?: any;
      /**
       * Properties to be set in the new duplicated object(s).
       */
      withProperties?: any;
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
      withContents?: any;
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

    export interface MoveOptionalParameter {
      /**
       * The new location for the object(s).
       */
      to: any;
    }

    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface InviteOptionalParameter {
      to: any;
      /**
       * For text chats, an invitation message to send to this participant. This parameter is required for text chat invitations and ignored for other types of chats.
       */
      withMessage?: string;
    }



    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface SendOptionalParameter {
      to: any;
    }


    /**
     * This file was automatically generated by json-schema-to-typescript.
     * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
     * and run json-schema-to-typescript to regenerate this file.
     */

    export interface ShowChatChooserOptionalParameter {
      for: any;
    }






}
export interface Messages {
    // Functions

     /**
      * Open a document.
      * @param directParameter The file(s) to be opened.
      * 
      */
     open(directParameter: {}, ): void;

     /**
      * Close a document.
      * @param directParameter the document(s) or window(s) to close.
      * @param option
      * 
      */
     close(directParameter: any, option?: Messages.CloseOptionalParameter): void;

     /**
      * Save a document.
      * @param directParameter The document(s) or window(s) to save.
      * @param option
      * 
      */
     save(directParameter: any, option?: Messages.SaveOptionalParameter): void;

     /**
      * Set an object's data.
      * @param directParameter undefined
      * @param option
      * 
      */
     set(directParameter: any, option?: Messages.SetOptionalParameter): void;

     /**
      * Print an object.
      * @param directParameter The file(s) or document(s) to be printed.
      * 
      */
     print(directParameter: any, ): void;

     /**
      * Quit the application.

      * @param option
      * 
      */
     quit(option?: Messages.QuitOptionalParameter): void;

     /**
      * Return the number of elements of a particular class within an object.
      * @param directParameter the object whose elements are to be counted
      * @param option
      * @return the number of elements
      */
     count(directParameter: any, option?: Messages.CountOptionalParameter): number;

     /**
      * Delete an object.
      * @param directParameter the object to delete
      * 
      */
     delete(directParameter: any, ): void;

     /**
      * Copy object(s) and put the copies at a new location.
      * @param directParameter the object(s) to duplicate
      * @param option
      * @return to the duplicated object(s)
      */
     duplicate(directParameter: any, option?: Messages.DuplicateOptionalParameter): any;

     /**
      * Verify if an object exists.
      * @param directParameter the object in question
      * @return true if it exists, false if not
      */
     exists(directParameter: any, ): boolean;

     /**
      * Get the data for an object.
      * @param directParameter undefined
      * @return undefined
      */
     get(directParameter: any, ): any;

     /**
      * Make a new object.

      * @param option
      * @return to the new object
      */
     make(option?: Messages.MakeOptionalParameter): any;

     /**
      * Move object(s) to a new location.
      * @param directParameter the object(s) to move
      * @param option
      * @return to the moved object(s)
      */
     move(directParameter: any, option?: Messages.MoveOptionalParameter): any;

     /**
      * Invites a buddy to join an existing chat.
      * @param directParameter undefined
      * @param option
      * 
      */
     invite(directParameter: {}, option?: Messages.InviteOptionalParameter): void;

     /**
      * Log in to the specified service, or all services if none is specified. If the account password is not in the keychain the user will be prompted to enter one.
      * @param directParameter undefined
      * 
      */
     logIn(directParameter?: {}, ): void;

     /**
      * Logs out of a service, or all services if none is specified.
      * @param directParameter undefined
      * 
      */
     logOut(directParameter?: {}, ): void;

     /**
      * Sends a message or file to a buddy or to a chat.
      * @param directParameter undefined
      * @param option
      * 
      */
     send(directParameter: {}, option?: Messages.SendOptionalParameter): void;

     /**
      * Stores the currently set buddy picture into your recent pictures.

      * 
      */
     storeRecentPicture(): void;

     /**
      * displays a dialog in Messages to start a new chat with the specified buddy

      * @param option
      * 
      */
     showChatChooser(option?: Messages.ShowChatChooserOptionalParameter): void;

     /**
      * Takes a snapshot of a video chat and saves it to a desktop.
      * @param directParameter undefined
      * 
      */
     takeSnapshot(directParameter: {}, ): void;

     /**
      * Accepts an incoming text, audio, or video chat invitation, or file transfer
      * @param directParameter undefined
      * 
      */
     accept(directParameter: {}, ): void;

     /**
      * Declines an incoming text, audio, or video chat invitation, or file transfer
      * @param directParameter undefined
      * 
      */
     decline(directParameter: {}, ): void;

     /**
      * Sends a recording request to all participants of an audio or video chat. Recording will not start until all participants have agreed to allow recording.
      * @param directParameter undefined
      * 
      */
     requestRecording(directParameter: {}, ): void;

     /**
      * Ends recording of an audio or video chat.
      * @param directParameter undefined
      * 
      */
     stopRecording(directParameter: {}, ): void;
}