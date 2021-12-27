export interface ModificationNote {
  modified_on: Date;
  modified_by: string;
  modification_note: string;
}

export enum response_status_codes {
  success = 200,
  bad_request = 400,
  internal_server_error = 500,
}
