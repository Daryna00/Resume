import os
from rest_framework.exceptions import ValidationError


def get_path_upload_photo(instance, file):
    """
    Path upload of avatar file. Format: media/avatar/user_id/photo.jpg
    instance - user object.
    """
    return f'resume_photo/resume_{instance.id}/{file}'


def validate_size_image(file_obj):
    """File size validate"""

    megabyte_limit = 5
    if file_obj.size > megabyte_limit * 1024 * 1024:
        raise ValidationError(f'Max size photo - {megabyte_limit} MB')


def delete_old_photo(path_file):
    """Delete old avatar"""

    if os.path.exists(path_file):
        os.remove(path_file)